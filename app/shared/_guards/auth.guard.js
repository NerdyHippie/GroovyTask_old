"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var angularfire2_1 = require('angularfire2');
require('rxjs/add/operator/map');
require('rxjs/add/operator/take');
var AuthGuard = (function () {
    //subject = new Subject<any>();
    function AuthGuard(router, af, auth) {
        //	af.auth.subscribe(data => this.setUid(data));
        this.router = router;
        this.af = af;
        this.auth = auth;
    }
    /*setUid(data:any) {
        console.log('set uid',data);
        if (data) {
            this.subject.next(data['uid']);
        } else {
            this.subject.next();
        }
    }*/
    /*canActivate(): Observable<boolean> {
        return this.auth
            .take(1)
            .map((authState: FirebaseAuthState) => !!authState)
            .do(authenticated => {
                if (!authenticated) this.router.navigate(['']);
            });
    }*/
    AuthGuard.prototype.canActivate = function (route, state) {
        /*if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;*/
        //console.log('canActivate');
        //let isAuthed = false;
        var _this = this;
        //this.subject.subscribe(val => isAuthed = val);
        /*if (this.subject) {
            console.log('subj exists',this.subject);
        } else {
            console.log('no subj');
        }*/
        //console.log('isAuthed',isAuthed);
        //return isAuthed;
        return this.af.auth.map(function (auth) {
            if (!auth) {
                _this.router.navigateByUrl('login');
                return false;
            }
            return true;
        }).take(1);
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, angularfire2_1.AngularFire, angularfire2_1.AngularFireAuth])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map