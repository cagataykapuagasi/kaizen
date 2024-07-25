import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, StatusBar, Text, View } from 'src/components';
import Image from 'src/components/Image';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IParamList } from 'src/types/navigation';
import { useRequest } from 'src/utils/useRequest';
import { IPromotionDetail } from 'src/types/api';
import { calculateDateDiff } from 'src/utils/date';
import { colors, height, languages, width } from 'res';
import { navigation } from 'src/utils/navigation';
import { extractTextFromHtml } from 'src/utils/data';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const { joinNow } = languages.get('default');

function PromotionDetail() {
  const { params } = useRoute<RouteProp<IParamList, 'PromotionDetail'>>();
  const { data, loading } = useRequest<IPromotionDetail>('getPromotionDetail', params);
  const { dayDiff } = calculateDateDiff(new Date(), data?.RemainingText);

  return (
    <>
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.container}>
        <StatusBar barStyle={loading ? 'dark-content' : 'light-content'} />

        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={navigation.goBack}
            activeOpacity={0.8}
            style={styles.back}
            hitSlop={20}>
            <Icon height={40} width={40} backgroundColor="dark" container size={18} name="back" />
          </TouchableOpacity>

          {!!data?.ImageUrl && (
            <Image style={styles.promotionImage} source={{ uri: data.ImageUrl }} />
          )}

          {!!data?.BrandIconUrl && (
            <View style={styles.brandItem}>
              <Image rounded height="100%" width="100%" source={{ uri: data.BrandIconUrl }} />
            </View>
          )}

          {!!dayDiff && (
            <View style={styles.dateContainer} backgroundColor="dark">
              <Text size="p3">{languages.t('default.lastNumberDay', { number: dayDiff })}</Text>
            </View>
          )}
        </View>

        <View distance={15} paddingHorizontal={15} flex={1}>
          {!!data?.Title && (
            <Text size="t1" color="black">
              {extractTextFromHtml(data.Title)}
            </Text>
          )}

          {!!data?.Description && (
            <Text distance={15} weight="400" size="d1" color="black">
              {extractTextFromHtml(data.Description)}
            </Text>
          )}

          <View gap={20} distance={15}>
            {data?.PromotionDetailItemAreas.map((item, ind) => (
              <Text key={ind} weight="400" size="d1" color="black">
                {extractTextFromHtml(item?.Description)}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>

      <Button style={styles.button} viewProps={{ height: 56 }}>
        {joinNow}
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle: {
    paddingBottom: 96,
  },
  promotionImage: {
    flex: 1,
    borderBottomLeftRadius: 100,
    height: height * 0.45,
    backgroundColor: colors.dark,
  },
  headerContainer: {
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
  dateContainer: {
    paddingHorizontal: 15,
    paddingTop: 3,
    paddingBottom: 7,
    borderRadius: 20,
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  back: {
    position: 'absolute',
    top: Math.max(initialWindowMetrics?.insets.top || 0, 50),
    left: 15,
    zIndex: 1,
    elevation: 1,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: width - 30,
    left: 15,
  },
});

export default PromotionDetail;
