/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Calendar as PrismaCalendar,
  Organization as PrismaOrganization,
} from "@prisma/client";

export class CalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CalendarCountArgs, "select">): Promise<number> {
    return this.prisma.calendar.count(args);
  }

  async calendars(
    args: Prisma.CalendarFindManyArgs
  ): Promise<PrismaCalendar[]> {
    return this.prisma.calendar.findMany(args);
  }
  async calendar(
    args: Prisma.CalendarFindUniqueArgs
  ): Promise<PrismaCalendar | null> {
    return this.prisma.calendar.findUnique(args);
  }
  async createCalendar(
    args: Prisma.CalendarCreateArgs
  ): Promise<PrismaCalendar> {
    return this.prisma.calendar.create(args);
  }
  async updateCalendar(
    args: Prisma.CalendarUpdateArgs
  ): Promise<PrismaCalendar> {
    return this.prisma.calendar.update(args);
  }
  async deleteCalendar(
    args: Prisma.CalendarDeleteArgs
  ): Promise<PrismaCalendar> {
    return this.prisma.calendar.delete(args);
  }

  async findOrganizations(
    parentId: string,
    args: Prisma.OrganizationFindManyArgs
  ): Promise<PrismaOrganization[]> {
    return this.prisma.calendar
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizations(args);
  }

  async getOrganization(parentId: string): Promise<PrismaOrganization | null> {
    return this.prisma.calendar
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
