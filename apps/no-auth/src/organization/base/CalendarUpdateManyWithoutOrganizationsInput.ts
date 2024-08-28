/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CalendarWhereUniqueInput } from "../../calendar/base/CalendarWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CalendarUpdateManyWithoutOrganizationsInput {
  @Field(() => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CalendarWhereUniqueInput],
  })
  connect?: Array<CalendarWhereUniqueInput>;

  @Field(() => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CalendarWhereUniqueInput],
  })
  disconnect?: Array<CalendarWhereUniqueInput>;

  @Field(() => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CalendarWhereUniqueInput],
  })
  set?: Array<CalendarWhereUniqueInput>;
}

export { CalendarUpdateManyWithoutOrganizationsInput as CalendarUpdateManyWithoutOrganizationsInput };