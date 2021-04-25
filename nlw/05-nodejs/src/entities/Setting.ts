import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"

import { v4 as uuid } from "uuid"

@Entity("settings")
// OBS.: É preferivel que os nomes dos atributos dentro da classe tenham o mesmo
// nome dos atributos do banco de dados
class Setting {
  @PrimaryColumn()
  id: string;
  
  @Column()
  username: string;
  
  @Column()
  chat: boolean;
  
  @UpdateDateColumn()
  updated_at: Date;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}
export { Setting }