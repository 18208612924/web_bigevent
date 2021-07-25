$(function () {
    $('#link_reg').on('click', function () {
        $('.login_box').hide()

        $('.reg_box').show()
    })

    $('#link_login').on('click', function () {
        $('.reg_box').hide()

        $('.login_box').show()
    })

    // 获取layui from对象
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pass: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repass: function (value) {
            var pwd = $('.reg_box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致'
            }
        }
    })

    $('#form_reg').on('submit', function (e) {
        e.preventDefault()
        
        var data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        console.log(data.username);
        $.post('http://ajax.frontend.itheima.net/api/reguser'), data, function (res) {
            if (res !== 0) {
                return layer.msg(res.message)
            }
            console.log("注册成功");
            $('#link_login').click()
        }
    })

})