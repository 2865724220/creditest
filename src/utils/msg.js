
const typeNotice = (_this, info) => {
    const msg = {content: info.msg};
    switch (info.status) {
    case 200:
        _this.$Message.success(msg); break;
    case 400:
        _this.$Message.error(msg); break;
    case 500:
        _this.$Message.error(msg); break;
    case 406:
        _this.$Message.warning(msg); break;
    default:
        _this.$Message.info(msg); break;
    }
};

const Msg = function (info) {
    if (toString.call(info) === "[object Array]") {
        typeNotice(this, {status: info[0], msg: info[1]});
    } else {
        typeNotice(this, info);
    }
};

module.exports = Msg;
