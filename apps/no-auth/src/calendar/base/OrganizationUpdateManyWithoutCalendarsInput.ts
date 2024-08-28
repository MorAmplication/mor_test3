/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrganizationUpdateManyWithoutCalendarsInput {
  @Field(() => [OrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationWhereUniqueInput],
  })
  connect?: Array<OrganizationWhereUniqueInput>;

  @Field(() => [OrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationWhereUniqueInput],
  })
  disconnect?: Array<OrganizationWhereUniqueInput>;

  @Field(() => [OrganizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrganizationWhereUniqueInput],
  })
  set?: Array<OrganizationWhereUniqueInput>;
}

export { OrganizationUpdateManyWithoutCalendarsInput as OrganizationUpdateManyWithoutCalendarsInput };
