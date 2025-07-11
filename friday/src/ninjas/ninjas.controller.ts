
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    @Get()
    getNinjas() {
        return [];
    }

    @Get(":id")
    getOneNinja(@Param("id") id:string) {
        return {
            id:id,
        };
    }

    @Post()
    createNinja() {
        return {};
    }

    @Put(':id')
    updateNinja() {
        return {};
    }

    @Delete(':id')
    removeNinja() {
        return {};
    }


}

