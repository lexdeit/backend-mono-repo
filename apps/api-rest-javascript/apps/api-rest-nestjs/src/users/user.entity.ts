import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @Column()
    first_Name: string

    @Column()
    last_Name: string

    @Column({ unique: true })
    email: string

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date

    @Column({ nullable: true })
    authStrategy: string

}