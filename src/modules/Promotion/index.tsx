import React, { useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet } from 'react-native';
import { colors, languages, width } from 'res';
import { Image, TagItem, Text, View } from 'src/components';
import { IPromotion, ITag } from 'src/types/api';
import { useRequest } from 'src/utils/useRequest';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { navigate } from 'src/utils/navigation';
import { calculateDateDiff } from 'src/utils/date';
import { extractTextFromHtml } from 'src/utils/data';

const itemWidth = width * 0.8;

const { errorAccured, moreMore } = languages.get('default');

function Promotion() {
  const [selectedTagId, setSelectedTagId] = useState<number | undefined>();
  const [index, setIndex] = useState(0);
  const params = useMemo(() => ({ TagId: selectedTagId }), [selectedTagId]);
  const tags = useRequest<ITag[]>('getTags');
  const promotions = useRequest<IPromotion[]>('getPromotions', params);
  const carouselRef = useRef(null);
  const disabled = tags.loading || promotions.loading;

  const renderItem = ({ item }: { item: IPromotion }) => {
    const { dayDiff } = calculateDateDiff(new Date(), item.RemainingText);

    const openDetail = () => {
      navigate('PromotionDetail', { Id: item.Id });
    };

    return (
      <Pressable onPress={openDetail} style={styles.promotionItem}>
        <View style={styles.promotionImageItem}>
          <Image style={styles.promotionImage} source={{ uri: item.ImageUrl }} />

          <View style={styles.brandItem}>
            <Image rounded height="100%" width="100%" source={{ uri: item.BrandIconUrl }} />
          </View>

          {!!dayDiff && (
            <View style={styles.dateContainer} backgroundColor="dark">
              <Text size="p3">{languages.t('default.lastNumberDay', { number: dayDiff })}</Text>
            </View>
          )}
        </View>

        <View distance={10} paddingHorizontal={30}>
          <Text textAlign="center" size="d1" color="black">
            {extractTextFromHtml(item?.Title)}
          </Text>
        </View>

        <Text
          distance={10}
          textAlign="center"
          size="d1"
          style={{ color: item.ListButtonTextBackGroudColor }}>
          {moreMore}
        </Text>

        <View style={[styles.bottomLine, { backgroundColor: item.ListButtonTextBackGroudColor }]}>
          <View style={styles.bottomLineTop} />
        </View>
      </Pressable>
    );
  };

  return (
    <View flex={1} distance={20}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          <TagItem
            disabled={disabled}
            selected={!selectedTagId}
            icon="search"
            item={{ Name: 'Hepsi' }}
            onPress={() => setSelectedTagId(undefined)}
          />

          {tags.loading ? (
            <ActivityIndicator style={{ marginLeft: 10 }} />
          ) : (
            tags.data?.map((i) => {
              const selected = i.Id === selectedTagId;

              return (
                <TagItem
                  disabled={disabled}
                  key={i.Id}
                  item={i}
                  selected={selected}
                  onPress={() => setSelectedTagId(i.Id)}
                />
              );
            })
          )}
        </ScrollView>
      </View>

      {promotions.loading ? (
        <ActivityIndicator />
      ) : promotions.error ? (
        <Text textAlign="center" color="black">
          {errorAccured}
        </Text>
      ) : !promotions.data?.length ? (
        <Text textAlign="center" color="black">
          Promosyon bulamamadı :(
        </Text>
      ) : (
        <>
          <Carousel
            layout="default"
            ref={carouselRef}
            data={promotions.data}
            renderItem={renderItem}
            sliderWidth={width}
            loop
            onSnapToItem={(i) => setIndex(i)}
            itemWidth={itemWidth}
          />

          <View style={{ minHeight: 56 }}>
            <Pagination
              dotsLength={promotions.data?.length}
              activeDotIndex={index}
              inactiveDotScale={0.5}
              containerStyle={{
                paddingTop: 16,
                paddingBottom: 30,
              }}
              inactiveDotStyle={{
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: colors.gainsboro,
              }}
              dotStyle={{
                backgroundColor: colors.secondary,
                height: 8,
                width: 18,
                borderRadius: 4,
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}

export default Promotion;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
    gap: 5,
    paddingBottom: 25,
  },
  promotionImage: {
    flex: 1,
    borderRadius: 16,
    borderBottomLeftRadius: 100,
  },
  promotionImageItem: {
    flex: 1,
    padding: 5,
  },
  promotionItem: {
    borderColor: colors.promotionBorder,
    borderWidth: 2,
    borderRadius: 16,
    paddingBottom: 30,
    flex: 1,
  },
  brandItem: {
    height: 65,
    width: 65,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomLine: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    elevation: -1,
  },
  bottomLineTop: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    height: 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 30,
  },
  dateContainer: {
    paddingHorizontal: 15,
    paddingTop: 3,
    paddingBottom: 7,
    borderRadius: 20,
    position: 'absolute',
    bottom: 10,
    right: 11,
  },
});
