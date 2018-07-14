import { expect } from "chai";
import { useFakeTimers } from "sinon";
import { describe, it, before } from "mocha";
import {
    getDatetime,
    getCurrentDatetime,
    getDate,
    getCurrentDate,
    getYear,
    getCurrentYear,
    getMonth,
    getCurrentMonth,
    getDay,
    getCurrentDay,
    getHours,
    getCurrentHours,
    getMinutes,
    getCurrentMinutes,
    getSeconds,
    getCurrentSeconds,
    getTime,
    getCurrentTime
} from "../src/index";

describe("With date parameter", () => {

    it("Returns datetime", () => {
        const date = new Date(2017, 11, 10, 20, 21, 12);
        expect(getDatetime(date)).to.be.eq("2017-12-10 20:21:12");
    });

    it("Returns datetime with correct zeroes", () => {
        const date = new Date(2017, 0, 1, 5, 5, 2);
        expect(getDatetime(date)).to.be.eq("2017-01-01 05:05:02");
    });

    it("Returns date", () => {
        const date = new Date(2017, 11, 10, 5, 5, 2);
        expect(getDate(date)).to.be.eq("2017-12-10");
    });

    it("Returns date with correct zeroes", () => {
        const date = new Date(2017, 0, 1, 5, 5, 2);
        expect(getDate(date)).to.be.eq("2017-01-01");
    });

    it("Returns year", () => {
        const date = new Date(2017, 0, 1, 5, 5, 2);
        expect(getYear(date)).to.be.eq("2017");
    });

    it("Returns month", () => {
        const date = new Date(2017, 11, 1, 5, 5, 2);
        expect(getMonth(date)).to.be.eq("12");
    });

    it("Returns month with zero", () => {
        const date = new Date(2017, 0, 1, 5, 5, 2);
        expect(getMonth(date)).to.be.eq("01");
    });

    it("Returns day", () => {
        const date = new Date(2017, 0, 12, 5, 5, 2);
        expect(getDay(date)).to.be.eq("12");
    });

    it("Returns day with zero", () => {
        const date = new Date(2017, 0, 1, 5, 5, 2);
        expect(getDay(date)).to.be.eq("01");
    });

    it("Returns hour", () => {
        const date = new Date(2017, 0, 1, 10, 5, 2);
        expect(getHours(date)).to.be.eq("10");
    });

    it("Returns hour with zero", () => {
        const date = new Date(2017, 0, 1, 5, 5, 2);
        expect(getHours(date)).to.be.eq("05");
    });

    it("Returns minute", () => {
        const date = new Date(2017, 0, 1, 5, 11, 2);
        expect(getMinutes(date)).to.be.eq("11");
    });

    it("Returns minute with zero", () => {
        const date = new Date(2017, 0, 1, 5, 6, 2);
        expect(getMinutes(date)).to.be.eq("06");
    });

    it("Returns second", () => {
        const date = new Date(2017, 0, 1, 5, 5, 12);
        expect(getSeconds(date)).to.be.eq("12");
    });

    it("Returns second with zero", () => {
        const date = new Date(2017, 0, 1, 5, 5, 2);
        expect(getSeconds(date)).to.be.eq("02");
    });

    it("Returns time", () => {
        const date = new Date(2017, 0, 1, 10, 11, 12);
        expect(getTime(date)).to.be.eq("10:11:12");
    });

    it("Returns time with zeroes", () => {
        const date = new Date(2017, 0, 1, 5, 5, 2);
        expect(getTime(date)).to.be.eq("05:05:02");
    });

});

describe("For current date", () => {

    // @ts-ignore
    let clock;

    before(() => {
        clock = useFakeTimers({
            now: new Date(2017, 11, 10, 20, 21, 12),
        });
    });

    after(() => {
        // @ts-ignore
        clock.restore();
    });

    it("Returns current datetime", () => {
        expect(getCurrentDatetime()).to.be.eq("2017-12-10 20:21:12");
    });

    it("Returns current date", () => {
        expect(getCurrentDate()).to.be.eq("2017-12-10");
    });

    it("Returns current year", () => {
        expect(getCurrentYear()).to.be.eq("2017");
    });

    it("Returns current month", () => {
        expect(getCurrentMonth()).to.be.eq("12");
    });

    it("Returns current day", () => {
        expect(getCurrentDay()).to.be.eq("10");
    });

    it("Returns current hour", () => {
        expect(getCurrentHours()).to.be.eq("20");
    });

    it("Returns current minute", () => {
        expect(getCurrentMinutes()).to.be.eq("21");
    });

    it("Returns current second", () => {
        expect(getCurrentSeconds()).to.be.eq("12");
    });

});

describe("For current date with zeroes", () => {

    // @ts-ignore
    let clock;

    before(() => {
        clock = useFakeTimers({
            now: new Date(2017, 0, 1, 5, 6, 2),
        });
    });

    after(() => {
        // @ts-ignore
        clock.restore();
    });

    it("Returns current datetime", () => {
        expect(getCurrentDatetime()).to.be.eq("2017-01-01 05:06:02");
    });

    it("Returns current date", () => {
        expect(getCurrentDate()).to.be.eq("2017-01-01");
    });

    it("Returns current year", () => {
        expect(getCurrentYear()).to.be.eq("2017");
    });

    it("Returns current month", () => {
        expect(getCurrentMonth()).to.be.eq("01");
    });

    it("Returns current day", () => {
        expect(getCurrentDay()).to.be.eq("01");
    });

    it("Returns current hour", () => {
        expect(getCurrentHours()).to.be.eq("05");
    });

    it("Returns current minute", () => {
        expect(getCurrentMinutes()).to.be.eq("06");
    });

    it("Returns current second", () => {
        expect(getCurrentSeconds()).to.be.eq("02");
    });

});

describe("For current date with zeroes", () => {

    // @ts-ignore
    let clock;

    before(() => {
        clock = useFakeTimers({
            now: new Date(2017, 0, 1, 5, 6, 2),
        });
    });

    after(() => {
        // @ts-ignore
        clock.restore();
    });

    it("Returns current time", () => {
        expect(getCurrentTime()).to.be.eq("05:06:02");
    });

});