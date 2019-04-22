CREATE TABLE IF NOT EXISTS networks (
  network_id varchar(20)  default '00',
  no_of_nodes int default '0',
  status tinyint(3) default '0',
  PRIMARY KEY  (network_id)
  );
