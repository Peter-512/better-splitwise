import { pgTable, serial, integer, text, date } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	age: integer('age'),
	name: text('name'),
	birthday: date('birthday')
});
