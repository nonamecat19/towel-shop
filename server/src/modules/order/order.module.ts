import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderResolver } from './order.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Order } from '../../../db/entities'
import { ErrorsService } from '../../common/errors.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
  ],
  providers: [
    OrderService,
    // OrderResolver,
    ErrorsService,
  ],
})
export class OrderModule {
}
