/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Calendar } from "../../calendar/base/Calendar";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class Organization {
  @ApiProperty({
    required: false,
    type: () => Calendar,
  })
  @ValidateNested()
  @Type(() => Calendar)
  @IsOptional()
  calendar?: Calendar | null;

  @ApiProperty({
    required: false,
    type: () => [Calendar],
  })
  @ValidateNested()
  @Type(() => Calendar)
  @IsOptional()
  calendars?: Array<Calendar>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Organization as Organization };