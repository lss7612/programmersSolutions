function solution(id_list, report, k) {
    const summary = makeSummary(report, k);
    return makeCntArrBySummary(id_list, summary);
}

function makeSummary(report, k) {
    const summary = report.reduce((preVal, curVal) => {
        let reporter = curVal.split(' ')[0];
        let reported = curVal.split(' ')[1];
        if(preVal[reported] == undefined) {
            preVal[reported] = new Array();
        }
        if(!preVal[reported].includes(reporter)) {
            preVal[reported].push(reporter);
        }
        return preVal;
    }, {})

    for(key in summary) {
        if(summary[key].length < k) {
            delete summary[key];
        }
    }
    return summary;
}

function makeCntArrBySummary(id_list, summary) {
    return id_list.map(item => {
        let cnt = 0;
        for (key in summary) {
            if(summary[key].includes(item)) cnt++;
        }
        return cnt;
    });
}
