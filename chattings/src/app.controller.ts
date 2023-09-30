import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  //view폴더 안에서 Index를 찾아서 랜더링 해줘라 .
  @Render('index')
  root() {
    //여기서 Index.hbs로 날라가는거야.
    return {
      data: {
        title: 'chattings',
        copyright: '이준석',
      },
    };
  }
}
