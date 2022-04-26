// 저작자: 김수하

// 아이디 유효성 검사
export default function validIdCheck(id) {
    const pattern = /^[A-Za-z]{1}(?=.*\d)[A-Za-z0-9_-]{3,19}$/;

    return pattern.test(id);   // id가 정규표현식 pattern과 매칭한 결과를 boolean으로 반환
}

// 이름 유효성 검사
export function validNameCheck(name) {

    const pattern = /^[가-힣a-zA-Z]{2,}$/;

    return pattern.test(name);
}

// 이메일 유효성 검사
export function validEmailCheck(email) {
    const pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    return pattern.test(email);   // email이 정규표현식 pattern과 매칭한 결과를 boolean으로 반환
}

// 비밀번호 유효성 검사
export function validPawwsordCheck(password) {
    const pattern = /^(?=.*[a-zA-ZS])(?=.*\d)(?=.*?[#?!@$%^&*-]).{8,12}$/;

    return pattern.test(password);   // email이 정규표현식 pattern과 매칭한 결과를 boolean으로 반환
}

// 휴대폰 번호 유효성 검사
export function validPhoneNumCheck(phoneNum) {
    const pattern = /^01[01689]-\d{3,4}-\d{4}$/;

    return pattern.test(phoneNum);   // email이 정규표현식 pattern과 매칭한 결과를 boolean으로 반환
}