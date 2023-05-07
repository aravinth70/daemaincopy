import { courierClient } from "@lib/courier";

import type { RouterInputs } from "@utils/api";

type ContactNotificationInput = RouterInputs["contact"]["contactInquiry"];
export const sendContactNotification = async (
  data: ContactNotificationInput
): Promise<string | null> => {
  try {
    const { requestId } = await courierClient.send({
      message: {
        to: {},
        template: "JZ6SS7RBQAMXCTPFCNG80ZA9WZ6E",
        data: data,
      },
    });

    if (requestId) {
      return requestId;
    } else {
      return null;
    }
  } catch (error: unknown) {
    return null;
  }
};

type EventNotificationInput = RouterInputs["inquiries"]["eventsInquiry"];
export const sendEventsNotification = async (
  data: EventNotificationInput
): Promise<string | null> => {
  try {
    const { requestId } = await courierClient.send({
      message: {
        to: {},
        template: "N5JM2BNNW7M7E1KEHPW1Z0G767W5",
        data: data,
      },
    });
    if (requestId) {
      return requestId;
    } else {
      return null;
    }
  } catch (err: unknown) {
    return null;
  }
};

type OfferNotificationInput = RouterInputs["inquiries"]["offerInquiry"];
export const sendOfferNotification = async (
  data: OfferNotificationInput
): Promise<string | null> => {
  try {
    const { requestId } = await courierClient.send({
      message: {
        to: {},
        template: "8HWK3C87TXMKHEJXV833WX37N88X",
        data: data,
      },
    });

    if (requestId) {
      return requestId;
    } else {
      return null;
    }
  } catch (err: unknown) {
    return null;
  }
};

type TrainingCourseNotificationInput =
  RouterInputs["inquiries"]["trainingCenterInquiry"];
export const sendTrainingCourseNotification = async (
  data: TrainingCourseNotificationInput
): Promise<string | null> => {
  try {
    const { requestId } = await courierClient.send({
      message: {
        to: {},
        template: "WCD69YMND442MNKJVT429K34XFDZ",
        data: data,
      },
    });

    if (requestId) {
      return requestId;
    } else {
      return null;
    }
  } catch (err: unknown) {
    return null;
  }
};

type AcknowledgementData = {
  name: string;
  email: string;
};

export const sendCustomerAcknowledgement = async (
  data: AcknowledgementData
): Promise<string | null> => {
  try {
    const { requestId } = await courierClient.send({
      message: {
        to: {
          email: data.email,
        },
        template: "",
        data: data,
      },
    });

    if (requestId) {
      return requestId;
    } else {
      return null;
    }
  } catch (error: unknown) {
    return null;
  }
};

type JobApplicationNotificationInput = RouterInputs["jobApplication"]["apply"];
export const sendJobApplicationNotification = async (
  data: JobApplicationNotificationInput
): Promise<string | null> => {
  try {
    const { requestId } = await courierClient.send({
      message: {
        to: {},
        template: "",
        data: data,
      },
    });

    if (requestId) {
      return requestId;
    } else {
      return null;
    }
  } catch (error: unknown) {
    return null;
  }
};

type JobApplicationAcknowledgementData = {
  name: string;
  email: string;
  position: string;
};
export const sendJobApplicationAcknowledgement = async (
  data: JobApplicationAcknowledgementData
): Promise<string | null> => {
  try {
    const { requestId } = await courierClient.send({
      message: {
        to: {
          email: data.email,
        },
        template: "",
        data: data,
      },
    });

    if (requestId) {
      return requestId;
    } else {
      return null;
    }
  } catch (error: unknown) {
    return null;
  }
};
