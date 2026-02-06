import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { Buyer } from './entities/buyer.entity';
import { Item } from './entities/item.entity';
import { Favorite } from './entities/favorite.entity';
import { CartItem } from './entities/cart-item.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USER ?? 'ecommerce',
      password: process.env.DB_PASSWORD ?? 'ecommerce_dev',
      database: process.env.DB_NAME ?? 'ecommerce',
      entities: [
        Seller,
        Buyer,
        Item,
        Favorite,
        CartItem,
        Order,
        OrderItem,
      ],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
