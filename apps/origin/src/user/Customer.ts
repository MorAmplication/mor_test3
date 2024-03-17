import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType()
class Customer {
    @Field(() => enum)
    @ApiProperty({
        required: true,
        type: () => enum
    })
    enumTest!: enumName;
}

export { Customer as Customer };