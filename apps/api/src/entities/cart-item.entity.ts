import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Buyer } from './buyer.entity';
import { Item } from './item.entity';

@Entity('cart_items')
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @ManyToOne(() => Buyer, { onDelete: 'CASCADE' })
  @JoinColumn()
  buyer: Buyer;

  @ManyToOne(() => Item, { onDelete: 'CASCADE' })
  @JoinColumn()
  item: Item;

  @CreateDateColumn({ name: 'addedAt' })
  addedAt: Date;
}
