import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Migration to the new HttpClient is straightforward thanks to dependency injection
@Injectable()
export class FooBar {

  constructor(
    // This used to be `http: Http` - Replace it!
    private http: HttpClient
  ) {}

  public foo(): Observable<Object> {
    // CAUTION
    // In the "old" `@angular/http`, this returned an `Observable<Response>` by default
    // With `@angular/common/http`, we now get an `Observable<Object>` on the response body
    // In effect, we can basically remove all our `.map(res => res.json())` lines :-)
    this.http.get('/foo/bar').subscribe();
  }

}