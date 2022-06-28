create table employees (
	id serial primary key,
	employees_name varchar(50) not null
);

drop table employees;

insert into employees (employees_name)
values ('Амирам'),
	   ('Гузель'),
	   ('Мария'),
	   ('Анна'),
	   ('Антон'),
	   ('Борис'),
	   ('Максим'),
	   ('Александра'),
	   ('Айша'),
	   ('Анастасия'),
	   ('Наталья'),
	   ('Артём'),
	   ('Кирилл'),
	   ('Степан'),
	   ('Ульяна'),
	   ('Михаил'),
	   ('Ольга'),
	   ('Сергей'),
	   ('Василий'),
	   ('Елизавета'),
	   ('Иван'),
	   ('Виктория'),
	   ('Алёна'),
	   ('Матвей'),
	   ('Марта'),
	   ('Алиса'),
	   ('Павел'),
	   ('Ксения'),
	   ('Роман'),
	   ('Нина'),
	   ('Елена'),
	   ('Владислав'),
	   ('Маргарита'),
	   ('Таисия'),
	   ('Адам'),
	   ('Арсений'),
	   ('Алина'),
	   ('Алексей'),
	   ('Глеб'),
	   ('Софья'),
	   ('Амелия'),
	   ('Макар'),
	   ('Лев'),
	   ('Денис'),
	   ('Константин'),
	   ('София'),
	   ('Егор'),
	   ('Даниил'),
	   ('Злата'),
	   ('Евангелина'),
	   ('Тимофей'),
	   ('Кристина'),
	   ('Марьям'),
	   ('Семён'),
	   ('Елисей'),
	   ('Савва'),
	   ('Юлия'),
	   ('Полина'),
	   ('Аделина'),
	   ('Кира'),
	   ('Платон'),
	   ('Георгий'),
	   ('Даниэль'),
	   ('Александр'),
	   ('Дмитрий'),
	   ('Серафим'),
	   ('Богдан'),
	   ('Вадим'),
	   ('Булат'),
	   ('Ренат');


select * from employees;

create table salary (
	id serial primary key,
	monthly_salary int not null
);

drop table salary

insert into salary (monthly_salary)
values (1000),
	   (1100),
	   (1200),
	   (1300),
	   (1400),
	   (1500),
	   (1600),
	   (1700),
	   (1800),
	   (1900),
	   (2000),
	   (2100),
	   (2200),
	   (2300),
	   (2400),
	   (2500);

select * from salary;

create table employees_salary (
	id serial primary key,
	employees_id int not null unique,
	salary_id int not null
)

drop table employess_salary;

insert into employees_salary (employees_id, salary_id)
values (1, 3),
	   (2, 6),
	   (3, 9),
	   (4, 3),
	   (5, 7),
	   (6, 10),
	   (7, 3),
	   (8, 6),
	   (9, 9),
	   (10, 2),
	   (11, 5),
	   (12, 9),
	   (13, 15),
	   (14, 10),
	   (15, 8),
	   (16, 16),
	   (17, 15),
	   (18, 3),
	   (19, 7),
	   (20, 11),
	   (21, 3),
	   (22, 6),
	   (23, 9),
	   (24, 3),
	   (25, 7),
	   (26, 9),
	   (27, 3),
	   (28, 5),
	   (29, 8),
	   (30, 12),
	   (80, 4),
	   (81, 5),
	   (82, 9),
	   (83, 12),
	   (84, 13),
	   (85, 12),
	   (86, 15),
	   (87, 16),
	   (88, 11),
	   (89, 10);

select * from employees_salary;

create table roles(
	id serial primary key,
	role_name int not null unique
)


alter table roles
alter column role_name type VARCHAR(30);

drop table roles;

insert into roles(role_name)
values ('Junior Python developer'),
	   ('Middle Python developer'),
	   ('Senior Python developer'),
	   ('Junior Java developer'),
	   ('Middle Java developer'),
	   ('Senior Java developer'),
	   ('Junior JavaScript developer'),
	   ('Middle JavaScript developer'),
	   ('Senior JavaScript developer'),
	   ('Junior Manual QA engineer'),
	   ('Middle Manual QA engineer'),
	   ('Senior Manual QA engineer'),
	   ('Project Manager'),
	   ('Designer'),
	   ('HR'),
	   ('CEO'),
	   ('Sales manager'),
	   ('Junior Automation QA engineer'),
	   ('Middle Automation QA engineer'),
	   ('Senior Automation QA engineer');

select * from roles;

create table roles_employees (
	id serial primary key,
	employees_id int not null unique,
	role_id int not null,
	foreign key (employees_id)
		references employees(id),
	foreign key (role_id)
		references roles(id)
);

drop table roles_employees;

insert into roles_employees(employees_id, role_id)
values (1, 1),
	   (2, 2),
	   (3, 3),
	   (4, 4),
	   (5, 5),
	   (6, 6),
	   (7, 7),
	   (8, 8),
	   (9, 9),
	   (10, 10),
	   (11, 11),
	   (12, 12),
	   (13, 13),
	   (14, 14),
	   (15, 15),
	   (16, 16),
	   (17, 17),
	   (18, 18),
	   (19, 19),
	   (20, 20),
	   (21, 1),
	   (22, 2),
	   (23, 3),
	   (24, 4),
	   (25, 5),
	   (26, 6),
	   (27, 7),
	   (28, 5),
	   (29, 6),
	   (30, 3),
	   (31, 2),
	   (32, 6),
	   (33, 7),
	   (34, 8),
	   (35, 19),
	   (36, 12),
	   (37, 4),
	   (38, 9),
	   (39, 14),
	   (40, 19);

select * from roles_employees;


