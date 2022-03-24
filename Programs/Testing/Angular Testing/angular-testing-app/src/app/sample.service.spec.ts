import { TestBed } from '@angular/core/testing';
import { SampleService } from './sample.service';
import {HttpClientModule} from '@angular/common/http';

describe('SampleService', () => {
  let service: SampleService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(SampleService);    
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service function testing', () => {
    expect(service.getInfo()).toEqual("Welcome to Simple angular service testing");
  });

  it("Fake Service testing all product",(done)=> {
    service.getFakeAllProduct().subscribe(result=> {
      let product = result[0];
      expect(20).toBe(result.length);
      expect(1).toBe(product.id);
      expect("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops").toBe(product.title);
      done(); // it will pause to test the code. 
    });
  })


  it("Fake Service testing only one product",(done)=> {
   service.geProduct(1).subscribe(result=> {
     let product = result;
     expect(1).toBe(product.id);
    expect("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops").toBe(product.title);
    done();
   })
  })

  // it("Fake Service testing asncy and await",async ()=> {
  //   let sub = await service.getFakeAllProduct();
  //   let res = await sub.subscribe(result=> {
  //     let product = result[0];
  //     expect(20).toBe(result.length);
  //     expect(1).toBe(product.id);
  //     expect("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops").toBe(product.title);
  //   })
  //   console.log(res);
  // })
});
