import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("search")
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie with a title: ${searchingYear}`
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return "This will create a movie";
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch('/:id')
    path(@Param('id') movieId: string, @Body() updatedData) {
        return {
            updatedData: movieId,
            ...updatedData,
        };
    }
}