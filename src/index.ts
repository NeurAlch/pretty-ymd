const TEN = 10;

const getMonth = (d: Date): string => {
    const month = d.getMonth() + 1;

    return month < TEN ? `0${month.toString()}` : month.toString();
};

const getCurrentMonth = (): string => getMonth(new Date());

const getDay = (d: Date): string => {
    const date = d.getDate();

    return date < TEN ? `0${date.toString()}` : date.toString();
};

const getCurrentDay = (): string => getDay(new Date());

const getHours = (d: Date): string => {
    const hours = d.getHours();

    return hours < TEN ? `0${hours.toString()}` : hours.toString();
};

const getCurrentHours = (): string => getHours(new Date());

const getMinutes = (d: Date): string => {
    const minutes = d.getMinutes();

    return minutes < TEN ? `0${minutes.toString()}` : minutes.toString();
};

const getCurrentMinutes = (): string => getMinutes(new Date());

const getSeconds = (d: Date): string => {
    const seconds = d.getSeconds();

    return seconds < TEN ? `0${seconds.toString()}` : seconds.toString();
};

const getCurrentSeconds = (): string => getSeconds(new Date());

const getYear= (d: Date): string => d.getFullYear().toString();

const getCurrentYear = (): string => (new Date()).getFullYear().toString();

const getDatetime = (d: Date): string => {
    const year = getYear(d);
    const mon = getMonth(d);
    const day = getDay(d);
    const hour = getHours(d);
    const min = getMinutes(d);
    const sec = getSeconds(d);

    return `${year}-${mon}-${day} ${hour}:${min}:${sec}`;
};

const getCurrentDatetime = (): string => {
    const d = new Date();

    return getDatetime(d);
};

const getDate = (d: Date): string => {
    const year = getYear(d);
    const mon = getMonth(d);
    const day = getDay(d);

    return `${year}-${mon}-${day}`;
};

const getCurrentDate = (): string => {
    const d = new Date();

    return getDate(d);
};

const getTime = (d: Date): string => {
    const hour = getHours(d);
    const min = getMinutes(d);
    const sec = getSeconds(d);

    return `${hour}:${min}:${sec}`;
};

const getCurrentTime = (): string => getTime(new Date());

export {
    getYear,
    getCurrentYear,
    getMonth,
    getCurrentMonth,
    getDay,
    getCurrentDay,
    getDate,
    getCurrentDate,
    getDatetime,
    getCurrentDatetime,
    getHours,
    getCurrentHours,
    getMinutes,
    getCurrentMinutes,
    getSeconds,
    getCurrentSeconds,
    getTime,
    getCurrentTime,
};