import { ObjectType, Field } from "@nestjs/graphql";
import { EnumTest } from "./EnumTest";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType()
class Customer {
    @Field(() => EnumTest)
    @ApiProperty({
        required: true,
        type: () => EnumTest
    })
    @Type(() => EnumTest)
    enumTest!: EnumTest;
}

export { Customer as Customer };