import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotifiyEmailDto } from './dto/notify-email.dto';
import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @UsePipes(new ValidationPipe)
  @EventPattern('notify_email')
  async notifyEmail(@Payload() data: NotifiyEmailDto){
    return this.notificationsService.notifyEmail(data);
  }
}
