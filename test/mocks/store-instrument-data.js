export const authTokenMock = '123';

export const instrumentRequestDataMock = {
    storeId: '123',
    shopperId: '321',
    instrumentId: '456',
    providerName: 'braintree',
    creditCard: {
        cardholderName: 'John Doe',
        number: '4111 1111 1111 1111',
        month: 11,
        year: 20,
        verificationCode: 993,
        issueMonth: 1,
        issueYear: 18,
        issueNumber: 1231231,
        trackData: '123',
        isManualEntry: true,
        iccData: '123',
        fallbackReason: 'test',
        isContactless: false,
        encryptedPinCryptogram: '123',
        encryptedPinKsn: '123',
        threeDSecure: {
            version: '1',
            status: 'test',
            vendor: 'braintree',
            cavv: '123',
            eci: '123',
            xid: '123',
        },
    },
    billingAddress: {
        addressLine1: '1-3 Smail St',
        addressLine2: 'Ultimo',
        city: 'Sydney',
        company: 'BigCommerce',
        countryCode: 'AU',
        email: 'shopper@bigcommerce.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '98765432',
        postCode: '2007',
        provinceCode: 'NSW',
        province: 'New South Wales',
    },
    defaultInstrument: true,
};

export const trustedShippingAddressDataMock = {
    storeId: '123',
    customerId: '321',
    shippingAddress: {
        addressLine1: '1-3 Smail St',
        addressLine2: 'Ultimo',
        city: 'Sydney',
        company: 'BigCommerce',
        countryCode: 'AU',
        email: 'shopper@bigcommerce.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '98765432',
        postCode: '2007',
        provinceCode: 'NSW',
        province: 'New South Wales',
    },
};
