import { test, expect } from '@playwright/test';
export default class Header{
    constructor(page) {
        this.page = page;
        //Locators
        this.allLinks = (name) => this.page.getByRole('link', { name: name })
        this.allLanguages = (name) => this.page.getByRole('link', { name: name }).first()
        //this.videoPlayer = this.page.locator('div.sizing-small.phase-ready.state-stopped')
        //this.videoPlayer = this.page.$('xpath=//*[@class="video-player"]')
        

        
        
    }

    async clickLinkHeader(name) {
       await this.allLinks(name).click()
    }
    async switchLanguages(name) { 
        await this.allLanguages(name).click()
    }

    async logoBusinessPage () {
        await this.page.getByRole('link', { name: 'logo' }).click();
    }
    /*
    async expectVideoToPlay() {

    //await this.videoPlayer.click();// Попробуем кликнуть, чтобы начать воспроизведение

    await this.videoPlayer.evaluate((video) => { video.play() });
      let currentTime;
      const startTime = Date.now();
      do {
        await this.page.waitForTimeout(100);
        currentTime = await this.videoPlayer.evaluate((video) => {
          return video.currentTime;
        });
      } while (currentTime <= 5 && Date.now() - startTime < 7000);
      expect(currentTime).toBeGreaterThan(0.5);
    }
      */
      /*
    async expectVideoToPlay() {
      // Клик по видео для начала воспроизведения
      await this.videoPlayer.click();
  
      // Попробуем воспроизвести видео
      await this.videoPlayer.evaluate(video => video.play());
  
      let currentTime;
      const startTime = Date.now();
      do {
          await this.page.waitForTimeout(100);
          currentTime = await this.videoPlayer.evaluate(video => video.currentTime);
          console.log('Current Time:', currentTime);  // отладка
      } while (currentTime !== undefined && currentTime <= 0.5 && Date.now() - startTime < 7000);
  
      // Проверка, что время воспроизведения больше 0.5 секунд
      expect(currentTime).toBeGreaterThan(0.5);
  }
      */
}
