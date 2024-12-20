(function () {
    function e() {
        window.addEventListener(
            "MozOrientation",
            function (c) {
                d.push("MozOrientation");
                a.x = c.x - b.x;
                a.y = c.y - b.y;
                a.z = c.z - b.z;
            },
            !0
        );
        window.addEventListener(
            "devicemotion",
            function (c) {
                d.push("devicemotion");
                a.x = c.accelerationIncludingGravity.x - b.x;
                a.y = c.accelerationIncludingGravity.y - b.y;
                a.z = c.accelerationIncludingGravity.z - b.z;
            },
            !0
        );
        window.addEventListener(
            "deviceorientation",
            function (c) {
                d.push("deviceorientation");
                a.alpha = c.alpha - b.alpha;
                a.beta = c.beta - b.beta;
                a.gamma = c.gamma - b.gamma;
            },
            !0
        );
    }

    var a = { x: null, y: null, z: null, alpha: null, beta: null, gamma: null },
        b = { x: 0, y: 0, z: 0, alpha: 0, beta: 0, gamma: 0 },
        c = null,
        d = [];

    window.gyro = {};
    gyro.frequency = 500;
    gyro.calibrate = function () {
        for (var c in a) b[c] = typeof a[c] == "number" ? a[c] : 0;
    };
    gyro.getOrientation = function () {
        return a;
    };
    gyro.startTracking = function (b) {
        c = setInterval(function () {
            b(a);
        }, gyro.frequency);
    };
    gyro.stopTracking = function () {
        clearInterval(c);
    };
    gyro.hasFeature = function (a) {
        for (var b in d) if (a == d[b]) return !0;
        return !1;
    };
    gyro.getFeatures = function () {
        return d;
    };
    e();
})();
