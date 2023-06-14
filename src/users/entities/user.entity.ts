import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_enc')
export class User {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  gid: number | null;

  @Column({ length: 256 })
  name: string;

  @Column({ length: 512 })
  email: string;

  @Column({ length: 256 })
  password: string;

  @Column({ length: 256 })
  salt: string;

  @Column()
  last_login: string;

  @Column({ length: 32 })
  company: string;

  @Column()
  role: 0 | 1;

  @Column()
  notification: string;

  @Column()
  login_fail_count: number;

  @Column()
  is_lock: boolean;

  @Column({ type: 'timestamptz' })
  latest_try_login_date: Date | null;

  @Column()
  last_password: string | null;

  @Column()
  is_login: boolean;

  @Column()
  last_salt: string | null;

  @Column()
  current_user_session: string | null;

  @Column({ type: 'timestamptz' })
  session_time: Date | null;

  @Column()
  usage_alarm_rate: number;

  @Column()
  ugid: number;

  @Column()
  ugname: string;

  @Column()
  lock_reason: number | null;

  @BeforeInsert()
  async hashPassword() {
    // this.password = await argon2.hash(this.password);
  }
}
