import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AdviceForm, IntroduceSection, Modal } from "../components/molecules";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [_ip, setIp] = useState("unknown");
  const [mobile, setMobile] = useState("desktop");
  const [_utm, setUtm] = useState<string | null>(null);

  useEffect(() => {
    // IP 가져오기
    const fetchIp = async () => {
      try {
        const response = await fetch("https://jsonip.com?format=json");
        const json = await response.json();
        setIp(json.ip);
        fetchData(json.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    // 기기 타입 설정
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMobile("mobile");
    }

    // URL 파라미터에서 UTM 값 가져오기
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setUtm(urlParams.get("utm"));

    fetchIp();

    const addrScript =
      "https://script.google.com/macros/s/AKfycbxHACsdGTYF49EatA8G3DsqeuReiTTZDiFxVJehXhHo_JmZxWKXo_RxR4c3D3_s-kJE/exec";
    // JSONP 대신 axios GET 요청
    const fetchData = async (ipAddress: any) => {
      const data = JSON.stringify({
        id: getUVfromCookie(),
        landingUrl: window.location.href,
        ip: ipAddress,
        referer: document.referrer,
        time_stamp: getTimeStamp(),
        utm: urlParams.get("utm"),
        device: mobile,
      });
      try {
        const response = await axios.get(
          `${addrScript}?action=insert&table=sheet1&data=${data}`
        );
        console.log("성공 - ", JSON.stringify(response.data));
      } catch (error: any) {
        if (error.response) {
          // 서버가 2xx 범위를 벗어난 상태 코드로 응답한 경우
          console.log("Error data:", error.response.data);
          console.log("Error status:", error.response.status);
          console.log("Error headers:", error.response.headers);
        } else if (error.request) {
          // 요청이 전송되었지만 응답을 받지 못한 경우
          console.log("Error request:", error.request);
        } else {
          // 요청 설정 중에 오류가 발생한 경우
          console.log("Error message:", error.message);
        }
      }
    };
  }, []);

  // 현재 시간 타임스탬프 생성
  const getTimeStamp = () => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")} ${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(
      date.getSeconds()
    ).padStart(2, "0")}`;
  };

  // 쿠키에서 유저 ID 가져오기 및 설정 함수
  const getCookieValue = (name: any) => {
    const value = `; ${document.cookie}`;
    const parts: string[] = value.split(`; ${name}=`);
    if (parts && parts.length === 2) return parts.pop()?.split(";").shift();
  };

  const setCookieValue = (name: any, value: any, days: any) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const getUVfromCookie = () => {
    const hash = Math.random().toString(36).substring(2, 8).toUpperCase();
    const existingHash = getCookieValue("user");
    if (!existingHash) {
      setCookieValue("user", hash, 180);
      return hash;
    } else {
      return existingHash;
    }
  };

  const [userId, _setUserId] = useState(getUVfromCookie());

  return (
    <HomePageContainer>
      <IntroduceSection />
      <AdviceForm userId={userId} handleOpenModal={handleOpenModal} />
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 2rem 4rem;
`;
