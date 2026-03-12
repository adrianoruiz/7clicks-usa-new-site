import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

let _db: PostgresJsDatabase<typeof schema> | null = null

export async function useDb() {
  if (!_db) {
    const { drizzle } = await import('drizzle-orm/postgres-js')
    const { default: postgres } = await import('postgres')
    const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/7clicks_site'
    const client = postgres(connectionString, {
      max: 10,
      idle_timeout: 20,
      connect_timeout: 10
    })
    _db = drizzle(client, { schema })
  }
  return _db
}

export type Database = PostgresJsDatabase<typeof schema>
