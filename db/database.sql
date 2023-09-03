CREATE DATABASE homeworks IF NOT EXIST;

USE homeworks;

create table users(
	id integer not null auto_increment,
    user_name varchar(15) not null unique,
    password varchar(30) not null unique,
    primary key (id)
);

create table subjects(
	id integer not null auto_increment,
    user_id integer not null,
    subject_name varchar(30) not null,
    primary key(id),
    constraint users_fk_subjects foresubjectsign key (user_id) references users (id)
);

create table tasks(
	id integer not null auto_increment,
    subject_id integer not null,
    task_name varchar(30) not null,
    task_description varchar(30) null,
    limit_date date not null,
    primary key(id),
    constraint subjects_fk_tasks foreign key(subject_id) references subjects (id)
);