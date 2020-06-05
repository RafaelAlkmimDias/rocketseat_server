import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('ítems', table => {
        table.bigIncrements('id').primary();
        table.string('Image').notNullable();
        table.string('title').notNullable();
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('items');
}