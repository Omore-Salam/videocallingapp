// Created by OMORE

window.onload = function() {


    function load() {
        document.getElementById('main').style.cssText = "display:block";
        document.getElementById('loader').style.cssText = "display:none";
    }
    setTimeout(load, 2500);

    document.getElementById('join').addEventListener('click', join);

    function join() {
        document.getElementById('main').style.cssText = "display:none;";
        document.getElementById('join1').style.cssText = "display:block;";
    }

    document.getElementById('back').addEventListener('click', back);

    function back() {
        document.getElementById('main').style.cssText = "display:block;";
        document.getElementById('join1').style.cssText = "display:none;";
    }

    document.getElementById('join_main').addEventListener('click', no)

    function no() {
        alert('No such meeting is available');
    }

    document.getElementById('new_meeting').addEventListener('click', meet);

    function meet() {
        document.getElementById('main').style.cssText = "display:none";
        document.getElementById('meeting-new').style.cssText = "display:block";
        document.getElementById('body').style.cssText = "background:#252525;";
    }

    document.getElementById('back1').addEventListener('click', back1);

    function back1() {
        document.getElementById('main').style.cssText = "display:block";
        document.getElementById('meeting-new').style.cssText = "display:none";
        document.getElementById('body').style.cssText = "background:#fff;";
    }

    document.getElementById('control2').addEventListener('click', camera);

    function camera() {
        document.getElementById('camera').classList.toggle('active');
        document.getElementById('camera1').classList.toggle('active');
    }

    document.getElementById('control3').addEventListener('click', mic);

    function mic() {
        document.getElementById('mic').classList.toggle('active');
        document.getElementById('mic1').classList.toggle('active');
    }

    document.getElementById('control1').addEventListener('click', call);

    function call() {

        var con = confirm('Are you sure you want to exit this page');
        if (con == true) {
            back1();
        } else {

        }
    }

    document.getElementById('control4').addEventListener('click', ex);

    function ex() {
        document.getElementById('controls').style.cssText = "display:block";
    }

    document.getElementById('back2').addEventListener('click', function() {
        document.getElementById('controls').style.cssText = "display:none";
    })

    document.getElementById('chat').addEventListener('click', function() {
        document.getElementById('meeting-new').style.cssText = "display:none";
        document.getElementById('chat-box-main').style.cssText = "display:block";
        document.getElementById('body').style.cssText = "background:#fff;";
    })

    //  chat section 

    document.getElementById('send').addEventListener('click', function() {
        let input = document.getElementById('text');
        if (input.value === "") {

        } else if (input.length > 200) {
            alert("YOU CANT TYPE MORE THAN 200 CHARECTARS :) ");
        } else {

            let para = document.createElement('p');
            para.setAttribute('id', 'new');

            let img = document.createElement('img');
            img.src = "https://static.businessinsider.com/image/55083729dd0895d1658b45a5/image.jpg";
            img.setAttribute('id', 'img5');
            para.appendChild(img);

            let node = document.createTextNode(input.value);
            para.appendChild(node);
            let a = document.getElementById('chat-area');
            a.appendChild(para);
        }
    })

    document.getElementById('sub-head3').addEventListener('click', function() {
        document.getElementById('meeting-new').style.cssText = "display:block";
        document.getElementById('chat-box-main').style.cssText = "display:none";
        document.getElementById('body').style.cssText = "background:#252525;";
    })


    document.getElementById('report').addEventListener('click', function() {
        document.getElementById('meeting-new').style.cssText = "display:none";
        document.getElementById('report-main').style.cssText = "display:block";
        document.getElementById('body').style.cssText = "background:#fff;";
    })

    document.getElementById('back3').addEventListener('click', function() {

        document.getElementById('report-main').style.cssText = "display:none";
        document.getElementById('body').style.cssText = "background:#252525";
        document.getElementById('meeting-new').style.cssText = "display:block";
    })

    document.getElementById('send1').addEventListener('click', function() {

        let item = document.getElementById('text1');
        if (item.value === "") {
            alert('Write your feedback before sending');
        } else if (item.value.length <= 20) {
            alert('Please elaborate your feedback.');
        } else {
            alert('Thanks for your time.');
        }
    })

    document.getElementById('three_dots').addEventListener('click', function() {
        document.getElementById('more').style.cssText = "display:block";
    })

    document.getElementById('sub-more4').addEventListener('click', function() {
        document.getElementById('more').style.cssText = "display:none";
    })

    document.getElementById('sub-more2').addEventListener('click', function() {
        document.getElementById('report-main').style.cssText = "display:block";
        document.getElementById('main').style.cssText = "display:none";
    })

    document.getElementById('sub-more1').addEventListener('click', function() {
        document.getElementById('main').style.cssText = "display:none";
        document.getElementById('setting-main').style.cssText = "display:block";
    })


    document.getElementById('save1').addEventListener('click', function() {
        alert('Changes saved');
    })

    document.getElementById('back4').addEventListener('click', function() {
        document.getElementById('main').style.cssText = "display:block";
        document.getElementById('setting-main').style.cssText = "display:none";
    })
}