//component 선언
Vue.component('num-btn', {
    template:'<button v-on:click="number++">{{number}}</button>', // {{number}}로 표시됨
    props: ['number'], //props == properties의 줄임말 // 1,2,3이 여기로 넘어와서 ↑
    data: function() { //  +++ component에서는 data객체를 함수형태로 선언해줘야한다.
        return { 

        }
    }
});


Vue.component('anchor', {
    template:'<span v-on:click="go()">{{ text }}</span>', // {{number}}로 표시됨
    props: ['text','href','openNew'], //props == properties의 줄임말 // 1,2,3이 여기로 넘어와서 ↑
    data: function() { //  +++ component에서는 data객체를 함수형태로 선언해줘야한다.
        return { 

        }
    },
    methods: {
        go: function() {
            if(this.href) { // 전달받은 props에 href가 있을때,
                //if(this.openNew --> true로 인식) { // 만약 새창으로 열람이 된다면, 문자열 'false'는 if문안에서 true로 동작하므로 (from open-new="false")
                if(this.openNew === 'true'){ //문자열 'true'일 경우
                    window.open(this.href,''); //윈도우 오픈으로 this.href값을 열겠다.
                }
                else{
                    location.href = this.href; // 그렇지 않으면 주소만 이동
                }
            }
        }
    }
});


new Vue({
    el: '#app'
   
});