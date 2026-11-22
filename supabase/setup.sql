-- Zodiac Security Score · DDC Night Session 2026
-- SQL Editor > New Query > paste entire script > Run (ONCE)
-- No names, emails, IP address or company data are recorded in this quiz table.
-- The participant_id is a random, non-identifying per-browser voting token.
-- Reset test data before the event: TRUNCATE TABLE zodiac_private.votes;
-- After the event, delete statistics: TRUNCATE TABLE zodiac_private.votes;
-- Restrict any database API exposure to public functions only.

BEGIN;

CREATE SCHEMA IF NOT EXISTS zodiac_private;
REVOKE ALL ON SCHEMA zodiac_private FROM PUBLIC, anon, authenticated;

CREATE TABLE IF NOT EXISTS zodiac_private.votes (
  participant_id uuid PRIMARY KEY,
  sign text NOT NULL,
  answers integer[] NOT NULL,
  score integer NOT NULL CHECK (score BETWEEN 0 AND 100),
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE zodiac_private.votes ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE zodiac_private.votes FROM PUBLIC, anon, authenticated;

CREATE TABLE IF NOT EXISTS zodiac_private.admins (
  user_id uuid PRIMARY KEY
);
ALTER TABLE zodiac_private.admins ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE zodiac_private.admins FROM PUBLIC, anon, authenticated;

-- Visitors can submit exactly one result per random browser token.
-- The score is calculated AGAIN on the database server from the five answers,
-- and must match the app's unchanged Cosmic Security Algorithm 2.0.
CREATE OR REPLACE FUNCTION public.zodiac_submit(
  p_participant_id uuid,
  p_sign text,
  p_answers integer[]
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
DECLARE
  v_signs jsonb := '[{"id":"widder","base":27,"tags":["speed","bypass","shortcut","innovation","privilege","automation"]},{"id":"stier","base":17,"tags":["retain","archive","retainaccess","process","shortcut","copy"]},{"id":"zwillinge","base":27,"tags":["sharing","external","social","access","sprawl","copy"]},{"id":"krebs","base":20,"tags":["archive","copy","retain","sprawl","precision","process"]},{"id":"loewe","base":27,"tags":["privilege","approval","access","social","speed","bypass"]},{"id":"jungfrau","base":23,"tags":["automation","shortcut","precision","ai","observe","copy"]},{"id":"waage","base":14,"tags":["delay","process","approval","social","retainaccess","observe"]},{"id":"skorpion","base":34,"tags":["observe","stealth","precision","external","access","retainaccess"]},{"id":"schuetze","base":40,"tags":["social","access","sharing","external","innovation","speed"]},{"id":"steinbock","base":17,"tags":["retain","retainaccess","archive","process","automation","approval"]},{"id":"wassermann","base":34,"tags":["ai","innovation","shortcut","automation","sprawl","observe"]},{"id":"fische","base":23,"tags":["sprawl","copy","shortcut","sharing","archive","social"]}]'::jsonb;
  v_options jsonb := '[[[2,["copy","precision","shortcut"]],[-4,["social","access","sharing"]],[4,["privilege","approval","process"]],[-2,["innovation","speed","observe"]]],[[4,["ai","innovation","precision"]],[2,["approval","process","innovation"]],[-4,["automation","shortcut","ai"]],[2,["observe","delay","precision"]]],[[4,["retainaccess","process","external"]],[-2,["sprawl","copy","automation"]],[4,["sharing","precision","external"]],[-4,["social","delay","shortcut"]]],[[2,["archive","process","precision"]],[4,["social","approval","delay"]],[-4,["ai","automation","sprawl"]],[-2,["retain","copy","precision"]]],[[4,["observe","precision","process"]],[-2,["speed","bypass","privilege"]],[2,["social","approval","delay"]],[-4,["stealth","observe","process"]]]]'::jsonb;
  v_sign jsonb;
  v_opt jsonb;
  v_base integer;
  v_i integer;
  v_index integer;
  v_impact integer;
  v_decisions integer := 0;
  v_overlap integer;
  v_resonance integer := 0;
  v_pos integer := 0;
  v_neg integer := 0;
  v_pattern integer := 0;
  v_cosmic integer;
  v_score integer;
  v_created timestamptz;
  v_total integer;
  v_avg numeric;
BEGIN
  IF p_participant_id IS NULL OR p_sign IS NULL OR
     p_answers IS NULL OR cardinality(p_answers) <> 5 OR
     array_lower(p_answers,1) <> 1 THEN
    RAISE EXCEPTION 'Ungültige Teilnahme' USING ERRCODE='22023';
  END IF;
  FOR v_i IN 1..5 LOOP
    IF p_answers[v_i] IS NULL OR p_answers[v_i] NOT BETWEEN 0 AND 3 THEN
      RAISE EXCEPTION 'Ungültige Quiz-Antwort' USING ERRCODE='22023';
    END IF;
  END LOOP;
  SELECT item INTO v_sign
    FROM jsonb_array_elements(v_signs) AS item
    WHERE item->>'id'=p_sign LIMIT 1;
  IF v_sign IS NULL THEN
    RAISE EXCEPTION 'Unbekanntes Sternzeichen' USING ERRCODE='22023';
  END IF;
  v_base := (v_sign->>'base')::integer;

  FOR v_i IN 1..5 LOOP
    v_index := p_answers[v_i];
    v_opt := v_options -> (v_i - 1) -> v_index;
    v_impact := (v_opt ->> 0)::integer;
    v_decisions := v_decisions + v_impact;
    SELECT count(*)::integer INTO v_overlap
      FROM jsonb_array_elements_text(v_opt -> 1) AS tag(value)
      WHERE (v_sign -> 'tags') ? tag.value;
    IF v_overlap > 0 THEN
      IF v_impact > 0 THEN
        v_resonance := v_resonance + CASE WHEN v_overlap >= 2 THEN 3 ELSE 2 END;
        v_pos := v_pos + 1;
      ELSIF v_impact < 0 THEN
        v_resonance := v_resonance - CASE WHEN v_overlap >= 2 THEN 3 ELSE 2 END;
        v_neg := v_neg + 1;
      END IF;
    END IF;
  END LOOP;
  IF v_pos >= 3 THEN v_pattern := v_pattern + 4; END IF;
  IF v_neg >= 3 THEN v_pattern := v_pattern - 4; END IF;
  v_cosmic := greatest(-16,least(16,v_resonance + v_pattern));
  v_score := greatest(0,least(100,75-v_base+v_decisions+v_cosmic));

  INSERT INTO zodiac_private.votes(participant_id,sign,answers,score)
    VALUES (p_participant_id,p_sign,p_answers,v_score)
    ON CONFLICT (participant_id) DO NOTHING
    RETURNING created_at INTO v_created;

  SELECT count(*)::integer,round(avg(score)::numeric,1)
    INTO v_total,v_avg FROM zodiac_private.votes;
  RETURN jsonb_build_object(
    'accepted',v_created IS NOT NULL,
    'score',v_score,
    'participants',v_total,
    'averageSecurity',v_avg
  );
END
$function$;

-- ONLY registered organizers can read aggregate statistics.
CREATE OR REPLACE FUNCTION public.zodiac_get_stats()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
DECLARE
  v_total integer;
  v_avg numeric;
  v_chaos integer;
  v_by_sign jsonb;
  v_by_tier jsonb;
  v_by_question jsonb;
BEGIN
  IF auth.uid() IS NULL OR NOT EXISTS (
    SELECT 1 FROM zodiac_private.admins WHERE user_id=auth.uid()
  ) THEN
    RAISE EXCEPTION 'Nur für die Night-Session-Moderation' USING ERRCODE='42501';
  END IF;
  SELECT count(*)::integer,coalesce(round(avg(score)::numeric,1),0),
         count(*) FILTER (WHERE score < 30)::integer
    INTO v_total,v_avg,v_chaos FROM zodiac_private.votes;

  SELECT coalesce(jsonb_agg(jsonb_build_object(
    'sign',t.sign,'count',t.n,'averageSecurity',t.avg_security,
    'riskIndex',round((100-t.avg_security)::numeric,1),
    'chaosCount',t.chaos_n
  ) ORDER BY 100-t.avg_security DESC, t.sign), '[]'::jsonb)
  INTO v_by_sign
  FROM (
    SELECT sign,count(*)::integer n,round(avg(score)::numeric,1) avg_security,
      count(*) FILTER (WHERE score<30)::integer chaos_n
    FROM zodiac_private.votes GROUP BY sign
  ) t;

  SELECT jsonb_agg(jsonb_build_object(
    'tier',tier,'count',cnt
  ) ORDER BY tier)
  INTO v_by_tier
  FROM (
    SELECT tier,
      CASE tier WHEN 0 THEN (SELECT count(*) FROM zodiac_private.votes WHERE score>=60)
                WHEN 1 THEN (SELECT count(*) FROM zodiac_private.votes WHERE score>=45 AND score<60)
                WHEN 2 THEN (SELECT count(*) FROM zodiac_private.votes WHERE score>=30 AND score<45)
                ELSE (SELECT count(*) FROM zodiac_private.votes WHERE score<30)
      END::integer AS cnt
    FROM generate_series(0,3) AS tier
  ) x;

  SELECT jsonb_agg(
    jsonb_build_object(
      'question',q,
      'options',(
        SELECT jsonb_agg(
          jsonb_build_object('option',o,'count',(
            SELECT count(*)::integer FROM zodiac_private.votes v WHERE v.answers[q]=o
          )) ORDER BY o
        ) FROM generate_series(0,3) AS o
      )
    ) ORDER BY q
  ) INTO v_by_question FROM generate_series(1,5) AS q;

  RETURN jsonb_build_object(
    'participants',v_total,
    'averageSecurity',v_avg,
    'chaosCount',v_chaos,
    'signs',v_by_sign,
    'tiers',v_by_tier,
    'questions',v_by_question,
    'updatedAt',now()
  );
END
$function$;

REVOKE ALL ON FUNCTION public.zodiac_submit(uuid,text,integer[]) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.zodiac_submit(uuid,text,integer[]) TO anon;

REVOKE ALL ON FUNCTION public.zodiac_get_stats() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.zodiac_get_stats() TO authenticated;

COMMIT;

-- AFTER you add your organizer account under Authentication > Users:
-- Copy the organizer UUID (NOT the email address) and run this separately:
-- INSERT INTO zodiac_private.admins(user_id) VALUES ('YOUR-ORGANIZER-USER-UUID');

-- BEFORE the real DDC event:
-- TRUNCATE TABLE zodiac_private.votes;

-- AFTER your talk / retention period:
-- TRUNCATE TABLE zodiac_private.votes;
