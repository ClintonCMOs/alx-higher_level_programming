-- display highest temps for each state (ordered by state name)
SELECT `state`, MAX(`value`) AS `max_temp` FROM `temperatures` GROUP By `state` ORDER BY `max_temp` DESC;
