class YagnaClasses {
    IsYagnaBinAvailable: boolean = false;
    IsYagnaServiceAvailable: boolean = false;
    IsYagnaPaymentAvailable: boolean = false;
}

class YagnaBin {
    Version: string = "";
    Network: string = "";
}

class YagnaService {
    AppKey: string = "";
}

class YagnaPayment {
    PaymentId: string = "";
    PaymentStatus: string = "";
}

export {YagnaClasses, YagnaBin, YagnaService, YagnaPayment}