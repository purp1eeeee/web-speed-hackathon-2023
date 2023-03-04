import type { LimitedTimeOfferFragmentResponse } from '../graphql/fragments';

export function getActiveOffer(
  offers: LimitedTimeOfferFragmentResponse[],
): LimitedTimeOfferFragmentResponse | undefined {
  const activeOffer = offers.find((offer) => {
    const now = new Date();
    const startDate = new Date(offer.startDate);
    const endDate = new Date(offer.endDate);

    const isAfter = startDate.getTime() < now.getTime();
    const isBefore = now.getTime() < endDate.getTime();

    return isAfter && isBefore;
  });

  return activeOffer;
}
