import { Component } from '@angular/core';

interface EventData {
  EVENTUUID: string;
  TENANT_ID: string;
  USER_ID: string;
  SUBJECT_TYPE_ID: number;
  SUBJECT_ID: number;
  SUBJECT_NAME: string;
  ACTION_ID: number;
  DETAILS: string;
  created_timestamp: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  events: EventData[] =  [
    {
      EVENTUUID: '1a2b3c4d',
      TENANT_ID: '12345',
      USER_ID: 'user123',
      SUBJECT_TYPE_ID: 1,
      SUBJECT_ID: 987,
      SUBJECT_NAME: 'ProductA',
      ACTION_ID: 101,
      DETAILS: 'Created a new product',
      created_timestamp: new Date('2023-08-25 10:00:00')
    },
    {
      EVENTUUID: '2e3f4g5h',
      TENANT_ID: '56789',
      USER_ID: 'user456',
      SUBJECT_TYPE_ID: 2,
      SUBJECT_ID: 654,
      SUBJECT_NAME: 'Order123',
      ACTION_ID: 202,
      DETAILS: 'Updated order status',
      created_timestamp: new Date('2023-08-25 12:30:00')
    },
    {
      EVENTUUID: '3i4j5k6l',
      TENANT_ID: '10101',
      USER_ID: 'user789',
      SUBJECT_TYPE_ID: 3,
      SUBJECT_ID: 321,
      SUBJECT_NAME: 'CustomerX',
      ACTION_ID: 303,
      DETAILS: 'Deleted customer record',
      created_timestamp: new Date('2023-08-25 15:15:00')
    },
    {
      EVENTUUID: '7i0j9k2q',
      TENANT_ID: '01231',
      USER_ID: 'user011',
      SUBJECT_TYPE_ID: 4,
      SUBJECT_ID: 301,
      SUBJECT_NAME: 'ProductZ',
      ACTION_ID: 201,
      DETAILS: 'Product sold',
      created_timestamp: new Date('2023-08-26 16:05:00')
    },
    {
      EVENTUUID: '1j2k0a3i',
      TENANT_ID: '56789',
      USER_ID: 'user456',
      SUBJECT_TYPE_ID: 4,
      SUBJECT_ID: 301,
      SUBJECT_NAME: 'Order123',
      ACTION_ID: 202,
      DETAILS: 'Modified order details',
      created_timestamp: new Date('2023-08-26 17:05:00')
    }
  ];
}

