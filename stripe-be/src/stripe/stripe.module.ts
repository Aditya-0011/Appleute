import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { StripeConfig } from './config/stripe.config';

@Module({
  controllers: [StripeController],
  providers: [StripeService, StripeConfig]
})
export class StripeModule { }
