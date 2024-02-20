import { IsString, Length } from "class-validator";

export class CreateTaskDto {
    @IsString({ message: 'Título deve ser uma string.'})
    @Length(3, 10, {message: 'Título deve ter de 3 até 10 caracteres.'})
    titulo: string;

    @IsString({ message: 'Descrição deve ser uma string'})
    @Length(3, 150, {message: 'Descrição deve ter de 3 até 150 caracteres.'})
    descricao: string; 
}
