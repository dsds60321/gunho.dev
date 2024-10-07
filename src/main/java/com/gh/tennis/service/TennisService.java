package com.gh.tennis.service;

import com.gh.facade.GyeonggiPhysicalFacade;
import com.gh.facade.SeoulPhysicalFacade;
import com.gh.facade.constant.Seoul;
import com.gh.global.util.CommonUtil;
import com.gh.tennis.dto.SeoulTennisResDto;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TennisService {

    private final Logger log = LoggerFactory.getLogger(getClass());

    private final SeoulPhysicalFacade seoulPhysicalFacade;
    private final GyeonggiPhysicalFacade gyeonggiPhysicalFacade;
    private final CrawlService crawlService;

    public SeoulTennisResDto getReservationList() {
        return getReservationList(1, 1000);
    }

    // 예약된 테니스 조회
    public SeoulTennisResDto getReservationList(int min, int max) {
        try {
            SeoulTennisResDto seoulTennisResDto = seoulPhysicalFacade.getReservationList(1, 1000, Seoul.COURT, SeoulTennisResDto.class);
            return seoulTennisResDto != null ? seoulTennisResDto : new SeoulTennisResDto(); // 빈 DTO 반환
        } catch (Exception e) {
            log.error("TennisService : {}", e.getMessage(), e);
            return new SeoulTennisResDto(); // 빈 DTO 반환
        }
    }

    // 서비스 아이디 조회
    public SeoulTennisResDto getDeatilByServiceId(String svcId) {
        SeoulTennisResDto tennisRes = seoulPhysicalFacade.getReservation(Seoul.COURT, "?SVCID=" + svcId, SeoulTennisResDto.class);
        if (tennisRes == null) {
            return tennisRes;
        }

        // 예약 가능 날짜 설정
        SeoulTennisResDto.ListPublicReservationSport listPublicReservationSport = tennisRes.getListPublicReservationSport();
        for (SeoulTennisResDto.Row row : listPublicReservationSport.getRows()) {
            row.setBookingList(crawlService.seoulTennis(row.getSvcUrl()));
        }

        return tennisRes;
    }
}
