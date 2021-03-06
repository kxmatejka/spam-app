import {InputType, Field} from 'type-graphql'

@InputType()
export class PostInput {
  @Field()
  public text: string

  @Field({nullable: true})
  public parent?: string
}
