import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class FileToBase64Service {

  public async getBase64(file): Promise<any> {
    return new Promise<any>((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      var data = event.target.result;
      resolve(data);
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  })
}

 public getBase64Clean(data){
   return data.split('base64,')[1].toISOstring();
 }

}