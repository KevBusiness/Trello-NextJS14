import {z} from "zod";
import {Board} from "@prisma/client";
import { ActionState} from "@/lib/create-safe-action";
import {CreateBoardSchema} from "@/actions/create-board/schema";

export type InputType = z.infer<typeof CreateBoardSchema>
export type ReturnType = ActionState<InputType, Board>