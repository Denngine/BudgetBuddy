INSERT INTO Account (id, name, balance) VALUES (1001,'Girokonto', 1500.00);
INSERT INTO Account (id,name, balance) VALUES (1002,'Sparkonto', 5000.00);
INSERT INTO Account (id,name, balance) VALUES (1003,'Investmentkonto', 10000.00);

INSERT INTO Category (id, name) VALUES (1001,'Lebensmittel');
INSERT INTO Category (id,name) VALUES (1002,'Transport');
INSERT INTO Category (id,name) VALUES (1003,'Unterhaltung');

INSERT INTO Transaction (id,date, amount, description, recurring, category_id, account_id) VALUES (1001,'2024-04-20', -50.00, 'Wochenendeinkauf', false, 1001, 1001);
INSERT INTO Transaction (id,date, amount, description, recurring, category_id, account_id) VALUES (1002,'2024-04-21', -30.00, 'Tanken', false, 1002, 1001);
INSERT INTO Transaction (id,date, amount, description, recurring, category_id, account_id) VALUES (1003,'2024-04-22', -20.00, 'Kino', false, 1003, 1001);
INSERT INTO Transaction (id,date, amount, description, recurring, category_id, account_id) VALUES (1004,'2024-04-23', 100.00, 'Gehaltseingang', false, 1003, 1001);

INSERT INTO Dept (id, total_depts, already_paid, beneficiary, account_id, deadline) VALUES (1001, 500.00, 200.00, 'Max Mustermann', 1001, '2024-05-15');
INSERT INTO Dept (id, total_depts, already_paid, beneficiary, account_id, deadline) VALUES (1002, 1000.00, 0.00, 'Erika Musterfrau', 1002, '2024-06-01');

INSERT INTO Target (id, name, rate, unit, start_date, end_date, account_id) VALUES (1001, 'Sparen für Urlaub', 0.1, '€', '2024-04-27', '2024-12-31', 1001);
INSERT INTO Target (id, name, rate, unit, start_date, end_date, account_id) VALUES (1002, 'Notfallfonds', 0.2, '€', '2024-01-01', '2024-12-31', 1001);
